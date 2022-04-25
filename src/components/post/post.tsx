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

export async function http<T>(reques: string): Promise<T> {
    const response = await fetch(reques)
    const body = await response.json()
    return body
}


class Post extends Component<RouteComponentProps<RouteParams>, PostState> {
    state = {
        post: {
            title: '',
            body: '',
        },
        params:{}
    }

    async componentDidMount() {
        const id = this.props.match.params.id || '';

        const post = await http<Ipost>(`https://jsonplaceholder.typicode.com/posts/${id}`)
           this.setState({
               post
           })
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