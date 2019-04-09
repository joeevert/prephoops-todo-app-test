<?php

namespace App\Http\Controllers\Api;

use App\Blog;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getAllTasks()
    {
      $blogs = Blog::all();

      return response()->json($blogs);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function postNewTask(Request $request)
    {
        $blog = new Blog();

        $blog->name = $request->get('name');
        // $blog->name = $request->get('status');

        $blog->save();

        return $blog;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $blogArticle = Blog::where('id', $id)->get();

        return response()->json($blogArticle);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function toggleCompleteTask(Request $request, $id)
    {
        // locate the blog by id
        $blog = Blog::findOrFail($id);

        // validate
        // $validatedData = $request->validate([
        //   'status' => 'required'
        // ]);

        // set data
        if (isset($request['status'])) {
          $blog->status = $request['status'];
        }

        // update
        $blog->update();

        return $blog;
    }

    public function editTask(Request $request, $id)
    {
        // locate the blog by id
        $blog = Blog::findOrFail($id);

        // set data
        if (isset($request['name'])) {
          $blog->name = $request['name'];
        }

        // update
        $blog->update();

        return $blog;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deleteTask($id)
    {
        // locates the blog by id
        $blog = Blog::findOrFail($id);

        $blog->delete();
  
        return response()->json(null, 204);
    }
}
