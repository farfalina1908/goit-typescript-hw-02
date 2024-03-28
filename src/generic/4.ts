/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Props {
  title: string
}

class Component <T> {

  constructor (public props:T) {

  }
}

class Page extends Component <Props>{
  pageInfo () {
    console.log(this.props.title); // My Page
  }
}

const pageProps: Props = { title: "My Page" };
const page = new Page(pageProps);
page.pageInfo();

export {};