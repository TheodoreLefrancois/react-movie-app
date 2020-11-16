import Axios from "axios";
const { Component } = require("react");

class FormEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      poster: "",
      comment: "",
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm(e) {
    e.preventDefault();
    const url = "https://post-a-form.herokuapp.com/api/movies/";
    Axios.post(url, this.state)
      .then((res) => res.data)
      .then((res) => {
        alert(`Votre film a été ajouté avec succes avec l'ID ${res.id}`);
      });
  }

  render() {
    return (
      <div className="Movie">
        <h1>Le meilleur film</h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Saisissez votre film preferé</legend>
            <div className="form-data">
              <label htmlFor="title"> Entrez ici le nom du film</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={this.onChange}
                value={this.state.title}
              ></input>
            </div>
            <div className="form-data">
              <label htmlFor="url">Entrez ici l'url du film</label>
              <input
                type="text"
                id="poster"
                name="poster"
                onChange={this.onChange}
                value={this.state.poster}
              ></input>
            </div>
            <div className="form-data">
              <label htmlFor="comment">
                {" "}
                Entrez votre commentaire a propos du film
              </label>
              <textarea
                type="text"
                id="comment"
                name="comment"
                onChange={this.onChange}
                value={this.state.comment}
              ></textarea>
              <hr />
              <div className="form-data">
                <input type="submit" value="Envoyer" />
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default FormEmployee;
