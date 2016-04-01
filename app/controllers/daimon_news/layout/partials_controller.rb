module DaimonNews::Layout
  class PartialsController < ApplicationController
    PARTIALS.each do |partial|
      eval <<~RUBY
        def #{partial}
          render partial: 'daimon_news/layout/application/#{partial}', layout: false
        end
      RUBY
    end
  end
end
