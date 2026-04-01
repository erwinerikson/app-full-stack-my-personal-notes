import React from 'react';

class NoteSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        keyword: ''
    };

    this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this);
  }

  onSearchChangeEventHandler(event) {
    this.setState(() => {
      return {
        keyword: event.target.value,
      }
    });
    this.props.changeWord(event.target.value);
  }

  render() {
    return (
      <div className="note-search" data-testid="note-search">
        <input
        data-testid="note-search-input"
        type="text"
        placeholder="Cari judul..."
        value={ this.state.keyword }
        onChange={ this.onSearchChangeEventHandler }
        />
      </div>
    );
  }
}

export default NoteSearch;