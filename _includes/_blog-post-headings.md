<h2 class="blog-heading">
<a href="{{ page.url }}">
{{ page.heading }}
</a>
</h2>
<h6 class="blog-date">
{{ page.date | date: "%A %B %d, %Y"}}
</h6>
{% if page.comments %}
<p style="float:right;">
{% include _blog-comments-count.md %}
<a href="http:{{ site.url }}{{ page.url }}#disqus_thread">Post a comment</a>
</p>
{% endif %}
