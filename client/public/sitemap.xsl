<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9">

  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="robots" content="noindex"/>
        <title>XML Sitemap | Ryan Law LLC</title>
        <style>
          :root {
            --bg: #0f1115;
            --panel: #161a21;
            --border: #262c36;
            --text: #e7eaef;
            --muted: #98a2b3;
            --accent: #c9a227;
            --row: #1b202a;
          }
          @media (prefers-color-scheme: light) {
            :root {
              --bg: #f6f7f9;
              --panel: #ffffff;
              --border: #e3e6ea;
              --text: #1a1d23;
              --muted: #5f6b7a;
              --accent: #8a6d12;
              --row: #fafbfc;
            }
          }
          * { box-sizing: border-box; }
          body {
            margin: 0;
            padding: 2rem 1.25rem 4rem;
            background: var(--bg);
            color: var(--text);
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Helvetica, Arial, sans-serif;
            line-height: 1.5;
          }
          .wrap { max-width: 1000px; margin: 0 auto; }
          h1 {
            margin: 0 0 .35rem;
            font-size: 1.6rem;
            letter-spacing: -0.01em;
          }
          .sub { color: var(--muted); font-size: .9rem; margin-bottom: .35rem; }
          .note {
            color: var(--muted);
            font-size: .8rem;
            margin-bottom: 1.5rem;
            padding-bottom: 1.25rem;
            border-bottom: 1px solid var(--border);
          }
          .scroll { overflow-x: auto; }
          table {
            width: 100%;
            border-collapse: collapse;
            background: var(--panel);
            border: 1px solid var(--border);
            border-radius: 8px;
            overflow: hidden;
            font-size: .875rem;
          }
          th {
            text-align: left;
            padding: .7rem .9rem;
            font-size: .7rem;
            text-transform: uppercase;
            letter-spacing: .06em;
            color: var(--muted);
            border-bottom: 1px solid var(--border);
            white-space: nowrap;
          }
          td {
            padding: .6rem .9rem;
            border-bottom: 1px solid var(--border);
            vertical-align: top;
          }
          tr:last-child td { border-bottom: none; }
          tr:nth-child(even) td { background: var(--row); }
          td.num { color: var(--muted); font-variant-numeric: tabular-nums; }
          td.meta {
            color: var(--muted);
            white-space: nowrap;
            font-variant-numeric: tabular-nums;
          }
          a { color: var(--accent); text-decoration: none; word-break: break-all; }
          a:hover { text-decoration: underline; }
        </style>
      </head>
      <body>
        <div class="wrap">
          <h1>XML Sitemap</h1>
          <div class="sub">
            Ryan Law LLC &#8212;
            <xsl:value-of select="count(s:urlset/s:url)"/> URLs
          </div>
          <div class="note">
            This file is generated for search engines. The styling here is for
            human readability only and does not affect how crawlers read it.
          </div>
          <div class="scroll">
            <table>
              <tr>
                <th>#</th>
                <th>URL</th>
                <th>Last Modified</th>
                <th>Change Freq.</th>
                <th>Priority</th>
              </tr>
              <xsl:for-each select="s:urlset/s:url">
                <tr>
                  <td class="num"><xsl:value-of select="position()"/></td>
                  <td>
                    <a href="{s:loc}"><xsl:value-of select="s:loc"/></a>
                  </td>
                  <td class="meta"><xsl:value-of select="s:lastmod"/></td>
                  <td class="meta"><xsl:value-of select="s:changefreq"/></td>
                  <td class="meta"><xsl:value-of select="s:priority"/></td>
                </tr>
              </xsl:for-each>
            </table>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
