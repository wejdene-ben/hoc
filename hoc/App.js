import React from 'react';
import "./App.css"



class App extends React.Component {

  constructor() {
    super()
    this.state = {
    isLoading: true,
      films: [
        {
          id: 'lord',
          img: "https://www.cinemaffiche.fr/3848-tm_large_default/seigneur-des-anneaux-les-deux-tours-2-le-lord-of-the-rings-the-two-towers-the.jpg",
          parag: 'the lord of the ring-',
          date: '2009', 
        },

        {
          id: 'ring',
          img: "http://fr.web.img6.acsta.net/pictures/17/01/10/17/11/474096.jpg",
          parag: 'the ring-',
          date: '2000', 
        },

        {
          id: 'matrix',
          img: "https://media.senscritique.com/media/000012094560/source_big/Matrix.jpg",
          parag: 'matrix-',
          date: '1999', 
        },

        {
          id: 'lordring',
          img: "https://www.cinemaffiche.fr/3848-tm_large_default/seigneur-des-anneaux-les-deux-tours-2-le-lord-of-the-rings-the-two-towers-the.jpg",
          parag: 'the lord of the ring-',
          date: '2009', 
        },

        {
          id: 'ringring',
          img: "http://fr.web.img6.acsta.net/pictures/17/01/10/17/11/474096.jpg",
          parag: 'the ring-',
          date: '2000', 
        },
      ]

    }
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        isLoading:false
      })
    },2000)
  }
 
  render() {
    return  this.state.isLoading ? <div className="loader"></div> : 
      
       this.state.films.map(el =>
                <div className="card">

                    <img className="card-image" src={el.img} />
                    
                    <p className="office__desc">{el.parag}</p>
                    <p>{el.date}</p>

                </div>
      

    );
  }
}

  export default App;