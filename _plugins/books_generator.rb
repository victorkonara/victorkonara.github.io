require "yaml"
require "date"

# Reads every YAML file in the top-level books/ folder and exposes them
# as site.data.books, sorted with the most recently dated book first.
module VictorKonara
  class BooksGenerator < Jekyll::Generator
    safe true
    priority :high

    def generate(site)
      books_dir = File.join(site.source, "books")
      return unless Dir.exist?(books_dir)

      books = Dir.glob(File.join(books_dir, "*.yml")).map do |file|
        YAML.load_file(file, permitted_classes: [Date])
      end

      books.sort_by! { |book| book["date"] }
      books.reverse!

      site.data["books"] = books
    end
  end
end
