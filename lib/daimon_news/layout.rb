require "daimon_news/layout/version"
require 'daimon_news/layout/engine'
require 'bourbon'
require 'neat'
require 'font-awesome-sass'
require 'rack/cors'

module DaimonNews
  module Layout
    PARTIALS = %i(
      content_header_buttons
      promotion
      footer
      menu
    ).freeze

    class << self
      def draw_routes(mapper)
        Mapper.new(mapper).draw
      end
    end

    class Mapper
      def initialize(mapper)
        @mapper = mapper
      end

      delegate :scope, :resources, :collection, :get, to: :@mapper

      def draw
        scope module: 'daimon_news/layout' do
          resources :partials do
            collection do
              PARTIALS.each do |partial|
                get partial
              end
            end
          end
        end
      end
    end
  end
end
