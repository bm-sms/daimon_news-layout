Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    if Rails.env.production?
      origins ENV['DAIMON_NEWS_HOST']
    else
      origins '*'
    end

    resource '/partials/*', headers: :any, methods: [:get]
  end
end
