import React, {Component} from 'react';

type CounterState = {
    count: number,
}

type CounterProps = {
    title?: string,
}

class Counter extends Component <CounterProps, CounterState> {
    constructor(props: CounterProps) {
        super(props)
        this.state = {
            count: 0
        }
    }

    static defaultProps: CounterProps = {
        title: 'Default counter: ',
    }

    // static getDerivedStateFromProps(props: CounterProps, state: CounterState): CounterState | null {
    //     return true ? {count: 2} : null
    //
    // }

    componentDidMount(): void {
    }

    shouldComponentUpdate(nextProps: CounterProps, nextState: CounterState, ): boolean {
        return true
    }

    handleClickP = () => {
        this.setState(({ count }) => ({
            count: ++count
        }))
    }
    handleClickM = () => {
        this.setState(({ count }) => ({
            count: --count
        }))
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}{this.state.count}</h1>
                <button onClick={this.handleClickP}>+1</button>
                <button onClick={this.handleClickM}>-1</button>
            </div>
        )
    }
}

const App = () => <Counter title='Counter: '/>

export default App;
