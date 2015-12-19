require 'sinatra'
require 'mysql2'
require 'json'

set :bind, '0.0.0.0'

get '/' do
    send_file 'public/index.html'
end

post '/message' do
    received = JSON.parse(request.body.read)    
    {
        :state => "Success"
    }.to_json
end
