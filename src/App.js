import React from 'react';
import { getBitcoinArticles } from './api';
import './App.css';
import ArticleList from './components/ArticleList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, ThemeProvider } from 'react-bootstrap';

class App extends React.Component {
  state = {
    articles: [],
    apiError: "",
  };

  async componentDidMount() {
    try {
      const response = await getBitcoinArticles();
      this.setState({ articles: response.articles });
    } catch (error) {
      this.setState({ apiError: "Could not find any articles" });
    }
  }

  render() {
    const { articles, apiError } = this.state;
    return (
      <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm']} minBreakpoint="sm">
        <Container>
          {articles.length > 0 && <ArticleList articles={articles} />}
          {apiError && <p>Could not fetch any articles. Please try again.</p>}
        </Container>

      </ThemeProvider>
    );
  }
}
export default App;
