class History < ApplicationRecord
  enum work_type: { it_engineer: 0, idol: 1 }
end
