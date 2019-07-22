web: bin/rails server -p $PORT -b 0.0.0.0

web: bundle exec puma -C config/puma.rb
release: rails db:migrate
