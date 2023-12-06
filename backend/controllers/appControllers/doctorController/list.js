const mongoose = require('mongoose');

// const Model = mongoose.model('Invoice');

const List = async (req, res) => {
  //   const page = req.query.page || 1;
  //   const limit = parseInt(req.query.items) || 10;
  //   const skip = page * limit - limit;
  //  Query the database for a list of all results
  // const resultsPromise = Model.find({ removed: false })
  //   .skip(skip)
  //   .limit(limit)
  //   .sort({ created: 'desc' })
  //   .populate('createdBy', 'name');
  // // Counting the total documents
  // const countPromise = Model.count({ removed: false });
  // // Resolving both promises
  // const [result, count] = await Promise.all([resultsPromise, countPromise]);
  // // Calculating total pages
  // const pages = Math.ceil(count / limit);

  // Getting Pagination Object
  // const pagination = { page, pages, count };

  const options = {
    method: 'GET',
    url: 'https://myhealthbox.p.rapidapi.com/search/updatedDocuments',
    params: {
      sd: '2020-06-01',
      c: 'us',
      l: 'en',
    },
    headers: {
      'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
      'X-RapidAPI-Host': 'myhealthbox.p.rapidapi.com',
    },
  };
  try {
    console.log(options);
    //  Query the database for a list of all results
    const result = await axios.request(options);

    if (result.length > 0) {
      return res.status(200).json({
        success: true,
        result,
        message: 'Successfully found all documents',
      });
    } else {
      return res.status(203).json({
        success: true,
        result: [],
        message: 'Collection is Empty',
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      result: [],
      message: error.message,
      error: error,
    });
  }
};

module.exports = List;
