using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace teng.kun.Web.Migrations
{
    public partial class supempent : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BaseModule_EmpBasedata",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EmpId = table.Column<string>(nullable: false),
                    EmpName = table.Column<string>(nullable: false),
                    EmpDep = table.Column<string>(nullable: true),
                    EmpPhone = table.Column<string>(nullable: true),
                    EmpWorkState = table.Column<bool>(nullable: false),
                    EmpFireState = table.Column<bool>(nullable: false),
                    EmpWorkInTime = table.Column<DateTime>(nullable: false),
                    EmpWorkOutTime = table.Column<DateTime>(nullable: false),
                    EmpRemark = table.Column<string>(nullable: true),
                    CreatedTime = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BaseModule_EmpBasedata", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "BaseModule_SupBasedata",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SupPhone = table.Column<string>(nullable: true),
                    SupName = table.Column<string>(nullable: false),
                    SupId = table.Column<string>(nullable: false),
                    SupComStartTime = table.Column<DateTime>(nullable: false),
                    SupComEndTime = table.Column<DateTime>(nullable: false),
                    SupState = table.Column<bool>(nullable: false),
                    SupRemark = table.Column<string>(nullable: true),
                    CreatedTime = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BaseModule_SupBasedata", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BaseModule_EmpBasedata");

            migrationBuilder.DropTable(
                name: "BaseModule_SupBasedata");
        }
    }
}
