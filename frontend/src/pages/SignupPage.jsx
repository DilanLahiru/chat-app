import GenderCheckbox from '../components/CheckBox';

const SignupPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="h-full w-full p-6 bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-gray-600">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign up
        </h1>
        <form>
          <div className="my-3">
            <label className="label p-2">Fullname</label>
            <input type="text" className="w-full input input-bordered h-10" />
          </div>
          <div className="my-3">
            <label className="label p-2">Username</label>
            <input type="text" className="w-full input input-bordered h-10" />
          </div>
          <div className="my-3">
            <label className="label p-2">Email</label>
            <input type="text" className="w-full input input-bordered h-10" />
          </div>
          <div className="my-3">
            <label className="label p-2">Password</label>
            <input
              type="password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div className="my-3">
            <label className="label p-2">Confirm Password</label>
            <input
              type="password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <GenderCheckbox />
          <a
            href="#"
            className="text-sm hover:underline hover:text-gray-200 inline-block"
          >
            Already have an account?
          </a>
          <div>
            <button className="btn btn-block btn-md mt-5">Create</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignupPage