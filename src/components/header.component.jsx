import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <>
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#demo">
              Navbar
              <span class="badge bg-secondary p-2">
                {this.props.nonZeroItems}
              </span>
            </a>
          </nav>
        </div>
      </>
    );
  }
}

export default Header;
