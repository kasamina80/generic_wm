class HistoriesController < ApplicationController
  def index
    @histories = History.all.to_json
  end
end
