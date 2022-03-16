class Api::NotesController < ApplicationController
  before_action :set_todo
  before_action :set_note, only: [:update, :show, :destroy]

  def index
    render json: @todos.notes
  end

  def show
    render json: @note 
  end

  def create
    @note = @todo.notes.new(notes_params)
    if @note.save
      render json: @note
    else
      render json: { errors: @notes.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @note.update(notes_params)
      render json: @note
    else
      render json: { errors: @notes.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @note.destroy
    render json: { message: 'Note Deleted' }
  end

  private
    def set_todo
      @todo = Todo.find(params[:todo_id])
    end

    def set_note
      @note = @todo.notes.find(params[:id])
    end

    def notes_params
      params.require(:note).permit(:subject, :body)
    end

end