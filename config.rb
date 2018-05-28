require 'compass/import-once/activate'
require 'autoprefixer-rails'
require 'breakpoint'
require 'susy'
# Require any additional compass plugins here.


# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "css/"
sass_dir = "sass/"

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false

preferred_syntax = :sass


on_stylesheet_saved do |file|
  css = File.read(file)
  File.open(file, 'w') do |io|
    io << AutoprefixerRails.process(css, browsers: ['ie >= 7', 'ff >= 10', 'chrome >= 10', 'safari >= 5', 'opera >= 12', 'android >= 5', 'bb >= 10', 'ios >= 5'])
  end
end

