import React, { Component, version } from 'react'
import Display from './Display';

class Clock extends Component {

    constructor(props) {
        super(props)

        this.state = {
            date: '',
            time: '',
            isDateVisible: true
        }

        this.toggleDate = this.toggleDate.bind(this)
        this.timer = this.timer.bind(this)
        this.todayDate = this.todayDate.bind(this)
    }

    componentDidMount() {
        this.timer();
        this.todayDate();


    }

    todayDate() {


        const v = new Date();
        const month = v.getMonth() + 1;
        const date = v.getDate();
        const year = v.getFullYear();

        this.setState({

            date: date + '/' + month + '/' + year,


        });

        console.log('date');
    }


    timer() {
        console.log('timer');


        setInterval(() => {

            const v = new Date();
            const hour = v.getHours();
            const min = v.getMinutes();
            const sec = v.getSeconds();
            this.setState({


                time: hour + ':' + min + ':' + sec

            });
        }, 1000);
        console.log('timer');
    }

    toggleDate() {
        console.log('clicked');

        this.setState(prevState => ({ isDateVisible: !prevState.isDateVisible }));
        console.log(this.state.isDateVisible);

        if (this.state.isDateVisible) {
            this.setState({
                date: ''

            });
            console.log('no date')
        }
        else {
            this.todayDate();
            console.log('Date present')

        }

    }








    render() {
        return (
            <div>
                <nav class="header navbar navbar-dark bg-dark"><div class="container"><div class="row m-auto"><i class="fa fa fa-clock-o fa-4x text-white"></i><div class="h1 ml-3 my-auto text-light" href="/"> <img src="./clock.png" width="70px" height="70px" />    React Clock</div></div></div></nav>
                <br></br>
                {/* <div>{this.state.date}</div>
                <div>{this.state.time}</div> */}

                <button class="btn btn-blow" onClick={this.toggleDate}><span class="">Hide Date</span></button>


                <Display date={this.state.date} time={this.state.time} />
                {/* <button onClick={this.toggleDate} >Click</button> */}






            </div>
        )
    }
}

export default Clock






// import React, { Component } from 'react'

// export class Clock extends Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             date: new Date().getDate,
//             isDateVisible: true
//         }

//         //this.toggleDate = this.toggleDate.bind(this);
//     }

//     // toggleDate() {
//     //     this.setState(prevState => ({ isDateVisible: !prevState.isDateVisible }));

//     // }


//     render() {
//         return (
//             <div>
//                 <h1>{this.state.date}</h1>
//             </div>
//         )
//     }
// }

// export default Clock
