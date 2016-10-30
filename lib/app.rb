require 'sinatra/base'

class Thermostat < Sinatra::Base
  get '/' do
    erb :thermostat
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
