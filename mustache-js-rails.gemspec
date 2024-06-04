lib = File.expand_path('lib', __dir__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'mustache-js-rails/version'

Gem::Specification.new do |spec|
  spec.name        = 'mustache-js-rails'
  spec.version     = MustacheJsRails::VERSION
  spec.authors     = ['Krzysztof Knapik']
  spec.email       = ['knapo@knapo.net']

  spec.summary     = 'mustache.js and jQuery.mustache.js integration for Rails 3.1+ asset pipeline'
  spec.homepage    = 'https://github.com/knapo/mustache-js-rails'
  spec.license     = 'MIT'

  spec.metadata['homepage_uri'] = 'https://github.com/knapo/mustache-js-rails'
  spec.metadata['source_code_uri'] = 'https://github.com/knapo/mustache-js-rails'

  spec.required_ruby_version = '>= 3.0.0'

  spec.files = Dir['{vendor,lib}/**/*'] + ['LICENSE', 'Gemfile', 'README.md']
  spec.require_paths = ['lib']

  spec.add_dependency 'railties', '>= 3.1'

  spec.add_development_dependency 'rake'
  spec.add_development_dependency 'release'
end


