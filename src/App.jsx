import React, { Component } from 'react'

class PageHeader extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <a href="#">
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  alt="GithubLogo"
                />
              </a>
            </li>
            <li>
              <a href="#">Octodex</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="https://octodex.github.com/faq/">FAQ</a>
            </li>
          </ul>
        </nav>

        <nav>
          <ul>
            <li>
              <a href="https://twitter.com/githubdesign">
                Follow us on Twitter
              </a>
            </li>
            <li>
              <a href="https://github.com/">Back to GitHub.com</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
class OneArticle extends Component {
  render() {
    return (
      <article>
        <figure>
          <a href={this.props.octohref}>
            <img
              src={this.props.octosrc}
              width={this.props.octowidth}
              height={this.props.octoheight}
              alt={this.props.title}
            />
          </a>
        </figure>
        <ul>
          <li>
            {this.props.octoNumber}:
            <a href={this.props.octohref}>
              <strong>{this.props.title}</strong>
            </a>
          </li>
          <li>
            <a href={this.props.authhref}>
              <img
                src={this.props.authsrc}
                width={this.props.authwidth}
                height={this.props.authheight}
                alt={this.props.authalt}
              />
            </a>
          </li>
        </ul>
      </article>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <PageHeader />

        <main>
          <OneArticle
            octohref="https://octodex.github.com//terracottocat/"
            octosrc="https://octodex.github.com//images/Terracottocat_Single.png"
            octowidth="400"
            octoheight="400"
            title="Terracottocat"
            octoNumber="#149"
            authhref="https://github.com/chubbmo"
            authsrc="https://github.com/chubbmo.png"
            authwidth="24"
            authheight="24"
            authalt="chubbmo"
          />
          <OneArticle
            octohref="https://octodex.github.com//octogatos/"
            octosrc="https://octodex.github.com//images/Octogatos.png"
            octowidth="400"
            octoheight="400"
            title="Octogatos"
            octoNumber="#148"
            authhref="https://github.com/cameronfoxly"
            authsrc="https://github.com/cameronfoxly.png"
            authwidth="24"
            authheight="24"
            authalt="cameronfoxly"
          />
          <OneArticle
            octohref="https://octodex.github.com//sentrytocat/"
            octosrc="https://octodex.github.com//images/Sentrytocat_octodex.jpg"
            octowidth="400"
            octoheight="400"
            title="Sentrytocat"
            octoNumber="#143"
            authhref="https://github.com/cameronmcefee"
            authsrc="https://github.com/cameronmcefee.png"
            authwidth="24"
            authheight="24"
            authalt="cameronfoxly"
          />
          <OneArticle
            octohref="https://octodex.github.com//boxertocat/"
            octosrc="https://octodex.github.com//images/boxertocat_octodex.jpg"
            octowidth="400"
            octoheight="400"
            title="Boxertocat"
            octoNumber="#141"
            authhref="https://github.com/rubyjazzy"
            authsrc="https://github.com/rubyjazzy.png"
            authwidth="24"
            authheight="24"
            authalt="rubyjazzy"
          />
          <OneArticle
            octohref="https://octodex.github.com//suftocat/"
            octosrc="https://octodex.github.com//images/surftocat.png"
            octowidth="400"
            octoheight="400"
            title="Surftocat"
            octoNumber="#140"
            authhref="https://github.com/jeejkang"
            authsrc="https://github.com/jeejkang.png"
            authwidth="24"
            authheight="24"
            authalt="jeejkang"
          />
          <OneArticle
            octohref="https://octodex.github.com//scubatocat/"
            octosrc="https://octodex.github.com//images/scubatocat.png"
            octowidth="400"
            octoheight="400"
            title="Scubatocat"
            octoNumber="#138"
            authhref="https://github.com/cameronfoxly"
            authsrc="https://github.com/cameronfoxly.png"
            authwidth="24"
            authheight="24"
            authalt="cameronfoxly"
          />
          <OneArticle
            octohref="https://octodex.github.com//dinotocat/"
            octosrc="https://octodex.github.com//images/dinotocat.png"
            octowidth="400"
            octoheight="400"
            title="Dinotocat"
            octoNumber="#130"
            authhref="https://github.com/kimestoesta"
            authsrc="https://github.com/kimestoesta.png"
            authwidth="24"
            authheight="24"
            authalt="kimestoesta"
          />
          <OneArticle
            octohref="https://octodex.github.com//spidertocat/"
            octosrc="https://octodex.github.com//images/spidertocat.png"
            octowidth="400"
            octoheight="400"
            title="Spidertocat"
            octoNumber="#88"
            authhref="https://github.com/jeejkang"
            authsrc="https://github.com/jeejkang.png"
            authwidth="24"
            authheight="24"
            authalt="jeejkang"
          />
        </main>
        <footer>
          <div>
            <p>© 2013 – 2020 GitHub, Inc. All rights reserved.</p>
          </div>
        </footer>
      </div>
    )
  }
}

export default App
