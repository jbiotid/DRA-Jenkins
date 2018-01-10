var request = require('request'),
assert = require('assert'),
base_url = 'http://www.google.com/'

describe('Hello World Server', function() {
	describe('GET /', function() {
		it('returns status code 200', function(done) {
			request.get(base_url, function(error, response, body) {
				//expect(response.statusCode).toBe(200);
				assert.equal(200, response.statusCode)
				done()
			})
		})
	})
})
