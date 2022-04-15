import React, {Component} from 'react';
import { RouteComponentProps } from 'react-router';

type RouteParams = {
    id: string,
}

interface Ipost {
    title?: string,
    body?: string,
}

type PostState = {
    post: Ipost,
}

class Post extends Component<RouteComponentProps<RouteParams>, PostState> {
    state = {
        post: {
            title: '',
            body: '',
        },
        params:{}
    }

    componentDidMount() {
        const id = this.props.match.params.id || '';

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(post => {this.setState({post})})
    }

    render() {
        const {post} = this.state;
        const {title, body} = post;

        return (
            <section>
                <h1>Post</h1>
                <article>
                    <h2>{title}</h2>
                    <p>{body}</p>
                </article>
            </section>
        );
    }
};

export default Post;