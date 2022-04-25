const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);

var mongoose = require('mongoose');

var users = require('./users');
var user = require('./models/user');

var sandbox = sinon.createSandbox();

describe('users', () => {
    let findStub;
    let sampleArgs;
    let sampleUser;

    beforeEach(() => {
        sampleUser = {
            id: 123,
            name: 'foo',
            email: 'foo@bar.com'
        }
        findStub = sandbox.stub(mongoose.Model, 'findById').resolves(sampleUser);
    });

    afterEach(() => {
        sandbox.restore();
    });

    context('get', () => {
        it('should check for an id', (done) => {
            users.get(null, (err, result) => {
                expect(err).to.exist;
                expect(err.message).to.equal('Invalid user id');
                done();
            })
        });

        it('should call findUserById with id and return result', (done) => {
            sandbox.restore();
            let stub = sandbox.stub(mongoose.Model, 'findById').yields(null, { name: 'foo'});
            users.get(123, (err, result) => {
                expect(err).to.not.exist;
                expect(stub).to.have.been.calledOnce;
                expect(stub).to.have.been.calledWith(123);
                expect(result).to.be.a('object');
                expect(result).to.have.property('name').to.equal('foo');
                done();
            })
        });
    });
});