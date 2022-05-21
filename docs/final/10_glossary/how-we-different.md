# How our Website is different?

Other common websites consist of a collection of pages connected together by links or \<a\> tags. Despite the fact that our website only has one page, it appears to have numerous pages. In summary, these are some of the benefits of our website, which will be discussed in greater depth in the next parts.

- We **virtually** serve all pages through one page.
- So we are **fast** then normal website.
- **Better link previews** with WhatsApp, Facebook, LinkedIn, Twitter, Telegram.
- **Better search engine optimization**.
- **Responsive to all screen sizes**.

## How virtually?

When a user makes the first request to the server, the server responds with all data for all pages, including content, design, and logic, or in programmer's terminology - HTML, CSS, and JS. But here's where things get interesting: our logic is doing a lot more than merely animating a webpage or providing dynamic behaviour to a certain section of the page. **Our website validates the URL on client side and renders the necessary data, reducing request-response time**. In general, we're just changing bits of a page to make it look like another one. Our website does not recreate the complete webpage from scratch, but only the sections of the page that differ from the last page visited. To put it another way, our website makes use of the same Facebook technology that is found in all of Facebook's products, React.

## How fast?

On a 4G connection, the average webpage takes about 1-2 seconds to load, and each page requires its own time. As a result, each page switch would take the same amount of time (same 1-2 seconds).

Our website loads in 1-2 seconds and switches between pages in 10-50 milliseconds.

## How Better link previews?

WhatsApp, Facebook, LinkedIn, Twitter, Telegram and many other services uses a Internet Protocol known as **Open Graph**.

> Open Graph is **an Internet protocol that was originally created by Facebook to standardize the use of metadata within a webpage to represent the content of a page**. Within it, you can provide details as simple as the title of a page or as specific as the duration of a video.

If our website's link was pasted or placed in any of the services listed above, that provider would provide additional features such as metadata about the link within their app without requiring a visit. For example

#### WhatsApp Preview



Sample code for this functionality

```html
<meta property="og:url" content="http://asckhn.com" />
<meta property="og:title" content="AS College" />
<meta property="og:description"
      content="A.S College is the great temple of learing since its inception in 1946, the college has been trying its level best to achieve varied goals and objectives as enshrined in constitution of the institution." />
<meta property="og:image" itemprop="image"
      content="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
```



## How Better Search Engine Optimization?

Our website is well-structured and has all of the metadata that search engines require in order to index it. This is a sample code which provides all data to Google.

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="theme-color" content="#227C9D" />
<meta name="description"
      content="A.S College is the great temple of learing since its inception in 1946, the college has been trying its level best to achieve varied goals and objectives as enshrined in constitution of the institution." />
<meta name="keywords" content="AS College, asckhn.com, College, Colleges under PU, AS Khanna">
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
```

## How Responsive to all screen sizes?

Our website's content adapts to the size of the screen. We're using [tailwind CSS](https://tailwindcss.com/), which provides this functionality in a clean and consistent manner.

For example, in large and small screen sizes, our website's navigation bar in the Hamburger Menu adjusts.

The website's content adjusts to all devices, including 4 Inch displays, Tablets, Laptops, and other extra large LCDs.
