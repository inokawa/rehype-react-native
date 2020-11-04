// ref: https://github.com/syntax-tree/hast

export interface Parent {
  children: (Element | Doctype | Comment | Text)[];
}

export interface Literal {
  value: string;
}

export interface Root extends Parent {
  type: "root";
}

export interface Element extends Parent {
  type: "element";
  tagName: keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap;
  properties?: Properties;
  content?: Root;
  children: (Element | Comment | Text)[];
}

export interface Properties {
  [key: string]: any;
}

export interface Doctype {
  type: "doctype";
  name: string;
  public?: string;
  system?: string;
}

export interface Comment extends Literal {
  type: "comment";
}

export interface Text extends Literal {
  type: "text";
}
