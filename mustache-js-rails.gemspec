$:.push File.expand_path("../lib", __FILE__)
require "mustache-js-rails/version"

Gem::Specification.new do |s|
  s.name        = "mustache-js-rails"
  s.version     = MustacheJsRails::VERSION
  s.authors     = ["Krzysztof Knapik"]
  s.email       = ["knapo@knapo.net"]
  s.homepage    = "https://github.com/knapo/mustache-js-rails"
  s.summary     = %q{mustache.js and jQuery.mustache.js for Rails 3.1+ asset pipeline}
  s.description = %q{
    mustache.js (https://github.com/janl/mustache.js) 
    and jQuery.mustache.js (https://github.com/jonnyreeves/jquery-Mustache) 
    for Rails 3.1+ asset pipeline
  }

  s.rubyforge_project = "mustache-js-rails"
  s.files = Dir["{vendor,lib}/**/*"] + ["MIT-LICENSE", "Rakefile", "Gemfile", "README.md"]
  s.require_paths = ["lib"]

  s.add_dependency 'railties',   '>= 3.1'
end