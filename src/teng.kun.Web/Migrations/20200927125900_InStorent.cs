using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace teng.kun.Web.Migrations
{
    public partial class InStorent : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "InStorManager_InStor",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    InstorVoucher = table.Column<string>(nullable: false),
                    MatId = table.Column<string>(nullable: false),
                    SupId = table.Column<string>(nullable: false),
                    InstorPrice = table.Column<double>(nullable: false),
                    InstorNum = table.Column<double>(nullable: false),
                    InstorDate = table.Column<DateTime>(nullable: false),
                    Abolishflag = table.Column<bool>(nullable: false),
                    InstorName = table.Column<string>(nullable: false),
                    StorName = table.Column<string>(nullable: true),
                    InstorVerifyState = table.Column<bool>(nullable: false),
                    VerifyOpinion = table.Column<string>(nullable: true),
                    RecoilState = table.Column<bool>(nullable: false),
                    InstorRemark = table.Column<string>(nullable: true),
                    RecoilDate = table.Column<DateTime>(nullable: false),
                    RecoilReason = table.Column<string>(nullable: true),
                    RecoilEmpId = table.Column<string>(nullable: true),
                    AbolishDate = table.Column<DateTime>(nullable: false),
                    AbolishReason = table.Column<string>(nullable: true),
                    AbolishEmpId = table.Column<string>(nullable: true),
                    SupCloseAccuntsDate = table.Column<string>(nullable: true),
                    SupCloseAccuntsEmpId = table.Column<string>(nullable: true),
                    SupCloseAccuntsRemark = table.Column<string>(nullable: true),
                    CreatorId = table.Column<int>(nullable: true),
                    CreatedTime = table.Column<DateTime>(nullable: false),
                    LastUpdaterId = table.Column<int>(nullable: true),
                    LastUpdatedTime = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InStorManager_InStor", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "InStorManager_InStor");
        }
    }
}
