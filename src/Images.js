import React, { Component } from "react";
import logo from "./logo.svg";
import firebase from 'firebase';
import "./App.css";
import {
  BootstrapTable,
  TableHeaderColumn,
  InsertModalFooter
} from "react-bootstrap-table";
import Files from 'react-files'


class Images extends Component {
    constructor(props) {
        super(props);
        this.state = {
          image: null,
          url: '',
          progress: 0
        }

        
        this.handleChange = this
          .handleChange
          .bind(this);
          this.handleUpload = this.handleUpload.bind(this);
      }
      componentDidMount() {
  
        const config = {
          apiKey: 'AIzaSyDV0pBNiDAf2DVagomi_M4Zo7uLh-SAcYg  ',
          authDomain: 'AIzaSyDV0pBNiDAf2DVagomi_M4Zo7uLh-SAcYg.firebaseapp.com',
          databaseURL: 'https://think-piece.firebaseio.com',
          projectId: 'fir-a39b7',
          storageBucket: 'fir-a39b7.appspot.com',
        };
        
        firebase.initializeApp(config);

      
    
    
        
        
    
      }

      handleChange = e => {
        if (e.target.files[0]) {
          const image = e.target.files[0];
          this.setState(() => ({image}));
        }
      }
      handleUpload = () => {
          const {image} = this.state;
          const uploadTask = firebase.storage().ref(`images/${image.name}`).put(image);
          uploadTask.on('state_changed', 
          (snapshot) => {
            // progrss function ....
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            this.setState({progress});
          }, 
          (error) => {
               // error function ....
            console.log(error);
          }, 
        () => {
            // complete function ....
            firebase.storage().ref('images').child(image.name).getDownloadURL().then(url => {
                console.log(url);
                this.setState({url});
            })
        });
      }
      render() {
        const style = {
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        };
        return (
          <div style={style}>
          <progress value={this.state.progress} max="100"/>
          <br/>
            <input type="file" onChange={this.handleChange}/>
            <button onClick={this.handleUpload}>Upload</button>
            <br/>
            <img src={this.state.url || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="400"/>
          </div>
        )
      }
    
  }

    

  
  export default Images;
