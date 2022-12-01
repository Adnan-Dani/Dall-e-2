import React from "react";
import axios from "axios"; 
import { toast } from "react-toastify";
const { Configuration, OpenAIApi } = require("openai");
const deepai = require("deepai");
export default class Form extends React.Component {
  state = {
    input: "",
    output: [
      {
        'id': 1,
        'image': 'https://media.istockphoto.com/id/535695503/photo/pakistan-monument-islamabad.jpg?s=612x612&w=0&k=20&c=bNqjdf8L-5igcRB89DdMgx0kNOmyeo1J_zzXmoxxl8w='
      },
      {
        'id': 2,
        'image': 'https://media.gettyimages.com/id/912853916/photo/shah-faisal-masjid-islamabad-pakistan.jpg?s=612x612&w=gi&k=20&c=lPgl9nhwINrmnG9a98QirEZXIeAS6vrDPZSWLxacps0='
      },
      {
        'id': 3,
        'image': 'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8='
      },
    ],
  };
  async componentDidMount() {
    const configuration = new Configuration({
      apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);

    try {
      // const res = axios.post('https://api.openai.com/v1/images/generations');
      const response = await openai.createImage({
        prompt: "A cute baby sea otter",
        n: 2,
        size: "512x512",
      });
      console.log(response);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        toast.error(error.response.data.error.code);
        toast.error(error.response.data.error.message);
      } else {
        console.log(error.message);
        toast(error.message);
      }
    }}
  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };
  handleGenerate = async () => {
    toast("Click on Generate");
    try {
      var resp = await deepai.callStandardApi("stable-diffusion", {
        text: "Monkey In the sky",
      });
      console.log(resp);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        toast.error(error.response.data.error.code);
        toast.error(error.response.data.error.message);
      } else {
        console.log(error.message);
        toast(error.message);
      }
    }
  };
  render() {
 
    return (
      <>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div
              className="input-group mb-3 col-10 px-0  shadow-lg"
              id="center"
            >
              <input
                type="text"
                className="form-control py-2"
                placeholder="Search..."
                aria-describedby="button-addon2"
                value={this.state.input}
                onChange={this.handleChange}
              />
              <button
                className="btn btn-dark"
                onClick={this.handleGenerate}
                type="button"
                id="button-addon2"
              >
                Generate
              </button>
            </div>
          </div>

          <div className="row center2">
            {this.state.output &&
              this.state.output.map((pic) => {
                return (
                  <div className="col-md-3" key={pic.id}>
                    <div className="card" style={{ width: "20rem;" }}>
                      <div className="img">
                        <img
                          className="card-img-top"
                          src={pic.image}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}
