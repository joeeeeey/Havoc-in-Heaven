$prefix = "hello:"

puts "aaa"

class Name

  @@count = 0

  def initialize(firstName, lastName)
    @firstName = firstName
    @lastName = lastName
    @@count = @@count + 1
  end




  def self.get_name_count
    @@count
  end

  def lastName
    @lastName
  end

  def firstName
    @firstName
  end

  def name_with_prefix
    $prefix + fullName
  end

  def fullName
    name = @firstName+" "+@lastName
    name
  end






end
