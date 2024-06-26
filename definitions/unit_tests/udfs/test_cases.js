// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const { generate_udf_test } = unit_test_utils;

generate_udf_test("int", [
    {
        inputs: [`"-1"`],
        expected_output: `CAST(-1 AS INT64)`
    },
]);
generate_udf_test("int", [
    {
        inputs: [`CAST(1 AS INT64)`],
        expected_output: `CAST(1 AS INT64)`
    },
    {
        inputs: [`CAST(7 AS INT64)`],
        expected_output: `CAST(7 AS INT64)`
    },
]);
generate_udf_test("getbit", [
    {
        inputs: [
            `CAST(23 AS INT64)`,
            `CAST(2 AS INT64)`
        ],
        expected_output: `CAST(1 AS INT64)`
    },
    {
        inputs: [
            `CAST(23 AS INT64)`,
            `CAST(3 AS INT64)`
        ],
        expected_output: `CAST(0 AS INT64)`
    },
    {
        inputs: [
            `CAST(11 AS INT64)`,
            `CAST(100 AS INT64)`
        ],
        expected_output: `CAST(0 AS INT64)`
    },
    {
        inputs: [
            `CAST(11 AS INT64)`,
            `CAST(3 AS INT64)`
        ],
        expected_output: `CAST(1 AS INT64)`
    },
]);