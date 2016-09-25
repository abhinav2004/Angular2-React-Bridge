import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: ''
})
export class AppComponent extends React.Component<Model,{}> {
  constructor(props?: Model) {
    super(props);
  }


  ngAfterContentInit() {
    ReactDOM.render(<AppComponent />, document.getElementsByTagName("my-app")[0]);
  }
  render() {
    return <button onClick={this.hello.bind(this.props)}>Hello</button>;
  }
  hello(props: Model) {
    alert("hello " + this.props.text +"!");
  }
;

export interface Model extends React.Props<any> {
  text?: string;
}
