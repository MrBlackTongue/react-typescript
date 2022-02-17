import React, {Component} from 'react';

// type CounterState = {
//     count: number,
// }
//
// type CounterProps = {
//     title?: string,
// }
//
// class Counter extends Component <CounterProps, CounterState> {
//     constructor(props: CounterProps) {
//         super(props)
//         this.state = {
//             count: 0
//         }
//     }
//
//     static defaultProps: CounterProps = {
//         title: 'Default counter: ',
//     }
//
//     // static getDerivedStateFromProps(props: CounterProps, state: CounterState): CounterState | null {
//     //     return true ? {count: 2} : null
//     //
//     // }
//
//     componentDidMount(): void {
//     }
//
//     shouldComponentUpdate(nextProps: CounterProps, nextState: CounterState, ): boolean {
//         return true
//     }
//
//     handleClickP = (e: React.MouseEvent <HTMLButtonElement | HTMLAnchorElement>) => {
//         console.log(`${e.clientX}, ${e.clientY}`)
//         this.setState(({ count }) => ({
//             count: ++count
//         }))
//     }
//     handleClickM = () => {
//         this.setState(({ count }) => ({
//             count: --count
//         }))
//     }
//
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}{this.state.count}</h1>
//                 <button onClick={this.handleClickP}>+1</button>
//                 <button onClick={this.handleClickM}>-1</button>
//                 <a href='#' onClick={this.handleClickP}>Ссылка</a>
//             </div>
//         )
//     }
// }

class Form extends Component<any, any> {
    handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        console.log(e.currentTarget)
    }

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('Submitted!')
    }

    handleCopy = (e: React.ClipboardEvent<HTMLInputElement>) => {
        console.log('Coppied!')

    }

    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
            >
                <label>
                    Simple text:
                </label>
                <input
                    onFocus={this.handleFocus}
                    onCopy={this.handleCopy}
                    type='text'
                    name='text'
                />
                <button
                    type='submit'
                >
                    Submit
                </button>
            </form>
        )
    }

}

// const App = () => <Counter title='Counter: '/>
const App:React.FC = () => <Form />

export default App;
