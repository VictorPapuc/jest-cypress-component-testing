import React, {Component} from 'react'

class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    }

    constructor() {
        // @ts-ignore
        super();
        this.handleIncrement = this.handleIncrement.bind(this)
        console.log(this)
    }


    handleIncrement(product: any) {
        console.log(product)
        this.setState({count: this.state.count + 1})
        // console.log('Increment clicked', this)
        // // let s = 'Increment Clicked'
        // // return s;

    }

    doHandleIncrement = (product: any) => {
        this.handleIncrement({id: 1});
    }

    renderTags() {
        if (this.state.tags.length === 0)
            return <p>There are no tags</p>;
        return <ul>
            <li>
                {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</li>
        </ul>
    }

    render() {
        return (
            <div>
                <span className={this.getBadgeClass()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement}
                        className="btn btn-secondary btn-sm">
                    Increment
                </button>

            </div>

        );

        // <ul>
        //     <li>
        //         {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        //     </li>
        // </ul>

        //
        // return (<React.Fragment>
        //
        // </React.Fragment>)
    }

    getBadgeClass() {
        let classes = "badge m-2 ";
        classes += (this.state.count === 0) ? "badge-warning" : "badge-primary";
        return classes;
    }

    formatCount() {
        const {count} = this.state
        return count === 0 ? 'Zero' : count
    }
}

export default Counter
