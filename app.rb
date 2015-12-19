require 'sinatra'
require 'mysql2'

set :bind, '0.0.0.0'

get '/' do
    send_file 'public/index.html'
end
