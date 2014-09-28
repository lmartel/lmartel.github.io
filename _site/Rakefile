require 'open-uri'

def raw_github_url(name)
    "https://raw.githubusercontent.com/lmartel/#{name}/master/README.md"
end

task :default => [:clean, :compile] do
    # Nothing else
end

task :clean do
    puts `make -C _layouts clean`
    puts `rm -rf _site`
end

task :compile do
    puts `make -C _layouts`
    puts `jekyll build --trace`
    # puts `compass compile -c compass.rb`
end

task :runserver => [:clean, :compile] do
    # puts `compass compile -c compass.rb`
    puts `jekyll serve --watch`
end

task :projects do
    Dir.glob('_projects/*').each do |filename|
        old = File.readlines(filename)
        File.open(filename, 'w') do |f|
            delimiters = 0
            old.each do |line|
                f << line
                delimiters += 1 if line.chomp == '---'
                break if delimiters == 2
            end

            project_name = filename.chomp('.md').sub(/.*(-|\/)/, '')
            puts "Updating #{project_name}..."
            open(raw_github_url project_name) do |readme_file|
                readme_file.each_line do |line|
                    f << line
                end
            end
        end
        puts "Done"
    end
end

namespace :dev do
    task :setup do
        puts `sudo apt-get -y install python-pygments`
        puts `bundle install`
    end
end

