source "https://rubygems.org"
ruby RUBY_VERSION

require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)

gem 'github-pages', versions['github-pages']
gem "jekyll"
gem "minima", "~> 2.0"
gem "jekyll-sitemap"
gem "pygments.rb"
gem "redcarpet"
gem "jekyll-seo-tag"
gem "jekyll-paginate"

group :jekyll_plugins do
   gem "jekyll-feed", "~> 0.6"
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

