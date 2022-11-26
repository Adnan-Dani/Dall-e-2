import React from "react";
import axios from "axios";
import { toast } from 'react-toastify';
const { Configuration, OpenAIApi } = require("openai");
export default class Form extends React.Component {
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
    }

    //  fetch('https://api.openai.com/v1/images/generations')
    // .then(res => res.text())
    // .then(text => console.log(text));
 
  }
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
              />
              <button className="btn btn-dark" type="button" id="button-addon2">
                Generate
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
