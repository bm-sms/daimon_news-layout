module DaimonNews::Layout
  class InstallGenerator < Rails::Generators::Base
    source_root File.expand_path('../templates', __FILE__)

    def copy_partials
      directory 'views/application', 'app/views/daimon_news/layout/application'
      directory 'views/news',        'app/views/daimon_news/layout/news'
    end

    def copy_initializers
      directory 'config', 'config'
    end
  end
end
