//Create a class of `Job` with the following properties:
// name
// industry
// requiresDegree
// field
// any other relevant properties (get creative!)

class Job {
    constructor(name, industry, requiresDegree, field, description, salary, experience) {
        this.name = name;
        this.industry = industry;
        this.requiresDegree = requiresDegree;
        this.field = field;
        this.description = description;
        this.salary = salary;
        this.experience = experience;
    }
// The following methods: getName, getFieldAndIndustry, any other relevant methods (optional).
    getName() {
    return `The job's name is ${this.name}.`
    ;
}

getFieldAndIndustry() {
    return `The job's fiel and industry are: ${this.field}, ${this.industry}.`
    ;
}

getSalary() {
return `The job's salary is ${this.salary}.`
;
}
}

// You must also extend the class into something of your choice. It must be relevant and make sense as the properties will have to be unique enough.
class RemoteJob extends Job {
    constructor(name, industry, requiresDegree, field, description, salary, experience, remote){
        super(name, industry, requiresDegree, field, description, salary, experience);
        this.remote = remote;
    }
    getDescription() {
        return `The job's description is ${this.description}.`
        ;
    }
    getRemote() {
        return `This job is a remote position: ${this.remote}.`
        ;
    }
}

// create three different instances of the Job class
const job1 = new Job('Software Engineer', 'Technology', false, 'Software development', 'This is a software engineer', 100000, '1 year');
const job2 = new Job('Construction Project Manager', 'Construction', true, 'civil ingeniering', 'This is a construction project manager', 5000, '2 years');
const job3 = new Job('Costumer Service Representative', 'Services', false, 'Insurance', 'This is a costumer service position', 2000, 0,);

// console log any 2 methods for each instance of the class
console.log(job1.getName());
console.log(job1.getFieldAndIndustry());
console.log(job1.getSalary());

console.log(job2.getName());
console.log(job2.getFieldAndIndustry());
console.log(job2.getSalary());

console.log(job3.getName());
console.log(job3.getFieldAndIndustry());
console.log(job3.getSalary());

// create an instance of the extended class
const job4 = new RemoteJob('Product Manager', 'Technology', true, 'Retail', 'This is a Product Manager for toosls section', 15000, '5 years', true);

// console log 2 new methods from the extended class
console.log(job4.getDescription());
console.log(job4.getRemote());