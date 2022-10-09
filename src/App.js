import React, {useState, useEffect} from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./component/NewsCards/NewsCards";
import wordsToNumbers from 'words-to-numbers';

const alanKey='76d0532106ffd30e8081e2b0a8fe24332e956eca572e1d8b807a3e2338fdd0dc/stage';

function App() {
    const [activeArticle, setActiveArticle] = useState(-1);
    const [newsArticles, setNewsArticles]= useState([]);


    useEffect(()=>{
        alanBtn({
            key:alanKey,
            onCommand: ({ command, articles,number})=>{
                if(command === 'newHeadlines') {
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                }  else if (command === 'highlight') {
                    setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
                }  else if (command === 'open') {
                    const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
                    const article = articles[parsedNumber - 1];
          
                    if (parsedNumber > articles.length) {
                      alanBtn().playText('Please try that again...');
                    } else if (article) {
                      window.open(article.url, '_blank');
                      alanBtn().playText('Opening...');
                    }
                }
        }
    })
    },[])


  return (
    <div className="App">
    {/* <h1>AI News Application</h1>   */}
    <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
    </div>
  );
}

export default App;
