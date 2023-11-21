<h2>Motivation</h2>
<p>You get error in <a href='https://pagespeed.web.dev'>Page Speed Insight</a> about ' Image elements do not have explicit width and height' Set an explicit width and height on image elements to reduce layout shifts and improve CLS. <a href='https://web.dev/articles/optimize-cls?utm_source=lighthouse&utm_medium=lr#images-without-dimensions'>Learn how to set image dimensions</a>. This is super long and complicated</p>
<p>so in this repo i want to show the problem and the solutiuon in a simple manner</p>


<h2>open questions (use as table of content for blog post)</h2>
<ul>
<li>what is CLS</li>
Cumulative Layout Shift (CLS) is a Core Web Vitals metric and it calculates the shifting of elements while the page is being downloaded and rendered


<li>motivation to fix CLS</li>
A high CLS score can indicate a poor user experience and can also be a drag on your site's SEO

<li>what can cause CLS</li>
<ul>
<li>Images without dimensions</li>
<li>Ads , Embeds , iFrames without dimensions</li>
<li>Dyamically injected content</li>
<li>Web fonts causing <a href='https://fonts.google.com/knowledge/glossary/foit'>FOIT</a>/<a href='https://fonts.google.com/knowledge/glossary/fout'>FOUT</a></li>
</ul>


<li>example of CLS with image</li>
<a href='https://github.com/NathanKr/cumulative-layout-shift-playground/releases/tag/0.1'>tag 0.1</a> - check home page with image element without width\height delayed by 0.5. The p below it is shifted down once the image appears</a>
This is the <a href='https://cumulative-layout-shift-playground-g1yppdxz3.vercel.app/'>page on vercel</a>

<p>SUPER STRANGE why i get here cls of zero !!!!!! in page speed insight</p>

<li>how to fix CLS with image</li>
ALWAYS !!! assign height and width for image (but this is not enough)

<li>example for solution</li>
<li>Web Core Vital with and with CLS issue</li>
</ul>

<h2>Points of interest</h2>
<ul>
<li>I am using next.js simply because i do not want to use lighthouse locally (check <a href='https://youtu.be/FV6rR-b1Cug?si=gPrX6FWsoUFNsNPc'>Lighthouse on localhost is bad</a>) i want to check Core Web Vitals on production and this is done very easyly with next.js on vercel</li>
</ul>
