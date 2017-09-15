class Api::PostsController < ApplicationController
  def index
    render json: Post.all
  end

  def create
    attrs = params.permit(:title, :img)
    post = Post.new(attrs)

    if post.save
      render json: { id: post.id, img_url: post.img.url, title: post.title }
    else
      render json: { errors: post.errors.full_messages }, status: 422
    end
  end

  def show
  end

  def destroy
    Post.find(params[:id]).destroy
  end
end
