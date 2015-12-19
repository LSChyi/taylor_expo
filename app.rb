require 'sinatra'
require 'mysql2'

get '/' do
    send_file 'public/index.html'
end