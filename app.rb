require 'sinatra'
require 'mysql2'
require 'json'
require_relative "config.rb"
client = Mysql2::Client.new(:host => "localhost", :username => Config.account, :password => Config.password)
client.query("use taylor_expo")

set :bind, '0.0.0.0'

get '/' do
    send_file 'public/index.html'
end

post '/message' do
    received = JSON.parse(request.body.read)
    client.query("INSERT INTO message(
            name,
            content
        ) VALUES (
            '#{received['name']}',
            '#{received['content']}'
        )")

    { :state => "Success" }.to_json
end
