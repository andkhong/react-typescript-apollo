interface Props {
  body: string;
  title: string;
}

const Html = ({ body, title }: Props) => (`
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
    </head>
    <body style="margin:0">
      <div id="root" style="height: 100%">${body}</div>
      <div id="modal-root" style="height: 100%"> </div>
    </body>
  </html>
`);

export default Html;
